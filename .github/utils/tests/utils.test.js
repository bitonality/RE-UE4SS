const utils = require('../utils');
const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars')

jest.mock('fs');
jest.mock('handlebars');



describe('humanReadableSize', () => {
    test('converts 0 bytes to "0 Bytes"', () => {
        expect(utils.humanReadableSize(0)).toBe('0 Bytes');
    });

    test('converts bytes to kilobytes', () => {
        expect(utils.humanReadableSize(1024)).toBe('1 KB');
        expect(utils.humanReadableSize(1536)).toBe('1.5 KB');
    });

    test('converts bytes to megabytes', () => {
        expect(utils.humanReadableSize(1048576)).toBe('1 MB');
        expect(utils.humanReadableSize(1572864)).toBe('1.5 MB');
    });

    test('converts bytes to gigabytes', () => {
        expect(utils.humanReadableSize(1073741824)).toBe('1 GB');
        expect(utils.humanReadableSize(1610612736)).toBe('1.5 GB');
    });

    test('converts bytes to terabytes', () => {
        expect(utils.humanReadableSize(1099511627776)).toBe('1 TB');
        expect(utils.humanReadableSize(1649267441664)).toBe('1.5 TB');
    });

    test('handles large numbers', () => {
        expect(utils.humanReadableSize(1e15)).toBe('909.49 TB');
        expect(utils.humanReadableSize(1.2e15)).toBe('1.07 PB');
    });

    test('handles decimals with trailing zeros', () => {
        expect(utils.humanReadableSize(1024)).toBe('1 KB');
        expect(utils.humanReadableSize(1536)).toBe('1.5 KB');
        expect(utils.humanReadableSize(1048576)).toBe('1 MB');
    });

    test('handles decimals with all zeros', () => {
        expect(utils.humanReadableSize(1024)).toBe('1 KB');
        expect(utils.humanReadableSize(1048576)).toBe('1 MB');
    });
});

describe('getChecklistFromMarkdown', () => {
    test('returns an empty map if markdownBody is null', () => {
        const result = utils.getChecklistFromMarkdown(null);
        expect(result.size).toBe(0);
    });

    test('returns an empty map if there are no checklist items', () => {
        const markdownBody = `
        # Title

        This is a test document.
        `;
        const result = utils.getChecklistFromMarkdown(markdownBody);
        expect(result.size).toBe(0);
    });

    test('returns a map with a single checklist item that is unchecked', () => {
        const markdownBody = `
        - [ ] This is an unchecked item
        `;
        const result = utils.getChecklistFromMarkdown(markdownBody);
        expect(result.size).toBe(1);
        expect(result.get('This is an unchecked item')).toBe(false);
    });

    test('returns a map with a single checklist item that is checked', () => {
        const markdownBody = `
        - [x] This is a checked item
        `;
        const result = utils.getChecklistFromMarkdown(markdownBody);
        expect(result.size).toBe(1);
        expect(result.get('This is a checked item')).toBe(true);
    });

    test('returns a map with multiple checklist items', () => {
        const markdownBody = `
        - [x] Checked item 1
        - [ ] Unchecked item 2
        - [x] Checked item 3
        `;
        const result = utils.getChecklistFromMarkdown(markdownBody);
        expect(result.size).toBe(3);
        expect(result.get('Checked item 1')).toBe(true);
        expect(result.get('Unchecked item 2')).toBe(false);
        expect(result.get('Checked item 3')).toBe(true);
    });

    test('handles checklist items with backticks', () => {
        const markdownBody = `
        - [x] \`Checked\` item
        - [ ] \`Unchecked\` item
        `;
        const result = utils.getChecklistFromMarkdown(markdownBody);
        expect(result.size).toBe(2);
        expect(result.get('Checked item')).toBe(true);
        expect(result.get('Unchecked item')).toBe(false);
    });

    test('is case insensitive for the checklist status', () => {
        const markdownBody = `
        - [X] This is a checked item with uppercase X
        - [ ] This is an unchecked item with space
        `;
        const result = utils.getChecklistFromMarkdown(markdownBody);
        expect(result.size).toBe(2);
        expect(result.get('This is a checked item with uppercase X')).toBe(true);
        expect(result.get('This is an unchecked item with space')).toBe(false);
    });
});

describe('generateMarkdownFromTemplate', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    test('Throws an error if the template path does not exist.', () => {
        fs.existsSync.mockReturnValue(false);

        expect(() => {
            utils.generateMarkdownFromTemplate('nonexistent/path', {}, 'output/path', handlebars);
        }).toThrowError('Template not found at: nonexistent/path');
    });

    test('writes the rendered result to the output path', () => {
        fs.existsSync.mockImplementation((path) => path === 'template/path' || path === 'output');
        fs.readFileSync.mockReturnValue('template content');
        handlebars.compile.mockReturnValue(() => 'rendered content');
        const templateData = {};

        utils.generateMarkdownFromTemplate('template/path', templateData, 'output/path', handlebars);

        expect(fs.writeFileSync).toHaveBeenCalledWith('output/path', 'rendered content');
    });

    test('creates output directory if it does not exist', () => {
        fs.existsSync.mockImplementation((path) => path === 'template/path');
        fs.readFileSync.mockReturnValue('template content');
        handlebars.compile.mockReturnValue(() => 'rendered content');
        const templateData = {};

        utils.generateMarkdownFromTemplate('template/path', templateData, 'nonexistent/output/path', handlebars);

        expect(fs.mkdirSync).toHaveBeenCalledWith('nonexistent/output');
        expect(fs.writeFileSync).toHaveBeenCalledWith('nonexistent/output/path', 'rendered content');
    });

    test('registers custom handlebars helpers', () => {
        fs.existsSync.mockImplementation((path) => path === 'template/path');
        fs.readFileSync.mockReturnValue('template content');
        handlebars.compile.mockReturnValue(() => 'rendered content');
        const templateData = {};

        utils.generateMarkdownFromTemplate('template/path', templateData, 'output/path', handlebars);

        expect(handlebars.registerHelper).toHaveBeenCalledWith('pretty-date', expect.any(Function));
        expect(handlebars.registerHelper).toHaveBeenCalledWith('pretty-size', expect.any(Function));
    });

    test('throws an error if mkdirSync fails', () => {
        fs.existsSync.mockImplementation((path) => path === 'template/path');
        fs.readFileSync.mockReturnValue('template content');
        fs.mkdirSync.mockImplementation(() => {
            throw new Error('Failed to create directory');
        });
        handlebars.compile.mockReturnValue(() => 'rendered content');
        const templateData = {};

        expect(() => {
            utils.generateMarkdownFromTemplate('template/path', templateData, 'invalid/output/path', handlebars);
        }).toThrowError('Failed to create directory');
    });
});

describe('hiddenTagWhitespaceTests', () => {
    describe.each([
        {
            body: `
<!-- START_TEST -->
FOO
<!-- END_TEST -->
`},
        {
            body: `
<!--    START_TEST    -->
FOO
<!-- END_TEST -->
`},
        {
            body: `
<!-- START_TEST -->
FOO
<!--    END_TEST    -->
`},
    ])('Parse Hidden Tag: %#', ({ body, expected = `FOO` }) => {
        test('Assert Matches', () => { expect(utils.getHiddenTagsFromMarkdown("TEST", body)).toEqual(expected); });
    });

    describe.each([
        {
            body: `
<!-- START_TEST -->
<!-- START_TEST -->
FOO
<!-- END_TEST -->
`},
        {
            body: `
<!-- START_TEST -->
FOO
<!-- START_TEST -->
<!-- END_TEST -->
`},
        {
            body: `
<!-- START_TEST -->
<!-- END_TEST -->
FOO
<!-- END_TEST -->
`},
        {
            body: `
<!-- START_TEST -->
FOO
<!-- END_TEST -->
<!-- END_TEST -->
`},
    ])('Parse Duplicate Tags: %#', ({ body }) => {
        test('Assert Matches', () => { expect(utils.getHiddenTagsFromMarkdown("TEST", body)).toBeNull(); });
    });

    describe.each([
        {
            body: `
<!-- START_TEST -->
`},
        {
            body: `
<!-- END_TEST -->
`},
    ])('Parse Missing Tags: %#', ({ body }) => {
        test('Assert Matches', () => { expect(utils.getHiddenTagsFromMarkdown("TEST", body)).toBeNull(); });
    });

    describe.each([
        {
            body: `
<!-- start_test -->
FOO
<!-- END_TEST -->
`},
        {
            body: `
<!-- START_TEST -->
FOO
<!-- end_test -->
`},
    ])('Parse Case Insensitive Tags: %#', ({ body, expected = `FOO` }) => {
        test('Assert Matches', () => { expect(utils.getHiddenTagsFromMarkdown("TEST", body)).toBe(expected); });
    });

    describe.each([
        {
            body: `
<!-- START_TEST -->

FOO

<!-- END_TEST -->
`, expected: `
FOO
`},
        {
            body: `
<!-- START_TEST -->
FOO

<!-- END_TEST -->
`, expected: `FOO
`},
        {
            body: `
<!-- START_TEST -->

FOO
<!-- END_TEST -->
`, expected: `
FOO`},
    ])('Parse Tags With Inner Newlines: %#', ({ body, expected }) => {
        test('Assert Matches', () => { expect(utils.getHiddenTagsFromMarkdown("TEST", body)).toEqual(expected); });
    });
});


/*
test('parseValidChecklist', () => {
    const validChecklist = `
<!-- START_ARTIFACT_LIST -->
- [ ] \`Game__Test__Win64\`
- [x] \`CasePreserving__Test__Win64\`
- [ ] \`CasePreserving__Shipping__Win64\`
- [x] \`Game__Shipping__Win64\`
- [x] \`Game__Debug__Win64\`
- [ ] \`Game__Dev__Win64\`
- [x] \`CasePreserving__Dev__Win64\`
- [ ] \`CasePreserving__Debug__Win64\`
<!-- END_ARTIFACT_LIST -->
`;

    const parsedMap = new Map([
        ["Game__Test__Win64", false],
        ["CasePreserving__Test__Win64", true],
        ["CasePreserving__Shipping__Win64", false],
        ["Game__Shipping__Win64", true],
        ["Game__Debug__Win64", true],
        ["Game__Dev__Win64", false],
        ["CasePreserving__Dev__Win64", true],
        ["CasePreserving__Debug__Win64", false]
    ]);

    expect(utils.getChecklistFromMarkdown("ARTIFACT_LIST", validChecklist)).toEqual(parsedMap);
});

test('parsePartialChecklist', () => {
    const validChecklist = `
<!-- START_ARTIFACT_LIST -->
- [ ] \`Game__Test__Win64\`
- [x] Test Line
- [x] \`CasePreserving_Test_Win64\`
<!-- END_ARTIFACT_LIST -->
`;
const parsedMap = new Map([
    ["Game__Test__Win64", false],
    ["CasePreserving_Test_Win64", true]
]);

    expect(utils.getChecklistFromMarkdown("ARTIFACT_LIST", validChecklist)).toEqual(parsedMap);
});

test('parseMalformedChecklist', () => {
    const validChecklist = `
<!-- START_ARTIFACT_LIST -->
Malformed Markdown
<!-- END_ARTIFACT_LIST -->
`;

    expect(utils.getChecklistFromMarkdown("ARTIFACT_LIST", validChecklist).size).toBe(0);
});

test('mismatchedTagsChecklist', () => {
    const validChecklist = `
<!-- START_FOO_LIST -->
Malformed Markdown
<!-- END_BAR_LIST -->
`;

    expect(utils.getChecklistFromMarkdown("FOO_LIST", validChecklist).size).toBe(0);
});

test('redundantStartTagChecklist', () => {
    const validChecklist = `
<!-- START_FOO_LIST -->
- [ ] \`BAR\`
<!-- START_FOO_LIST -->
- [ ] \`BAZ\`
<!-- END_FOO_LIST -->
`;

    expect(utils.getChecklistFromMarkdown("FOO_LIST", validChecklist).size).toBe(0);
});

test('redundantEndTagChecklist', () => {
    const validChecklist = `
<!-- START_FOO_LIST -->
- [ ] \`BAR\`
<!-- END_FOO_LIST -->
- [ ] \`BAZ\`
<!-- END_FOO_LIST -->
`;

    expect(utils.getChecklistFromMarkdown("FOO_LIST", validChecklist).size).toBe(0);
});

*/
