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

describe('Hidden Tags Parsing', () => {
    describe('Whitespace Handling', () => {
        test('Parse Hidden Tag with Whitespace', () => {
            const body = `
<!-- START_TEST -->
FOO
<!-- END_TEST -->
`;
            const expected = `FOO`;
            expect(utils.getHiddenTagsFromMarkdown("TEST", body)).toEqual(expected);
        });

        test('Parse Hidden Tag with Whitespace (Trimmed)', () => {
            const body = `
<!--    START_TEST    -->
FOO
<!-- END_TEST -->
`;
            const expected = `FOO`;
            expect(utils.getHiddenTagsFromMarkdown("TEST", body)).toEqual(expected);
        });

        test('Parse Hidden Tag with Whitespace (End Tag)', () => {
            const body = `
<!-- START_TEST -->
FOO
<!--    END_TEST    -->
`;
            const expected = `FOO`;
            expect(utils.getHiddenTagsFromMarkdown("TEST", body)).toEqual(expected);
        });
    });

    describe('Duplicate Tags', () => {
        test('Parse Duplicate Tags', () => {
            const body = `
<!-- START_TEST -->
<!-- START_TEST -->
FOO
<!-- END_TEST -->
`;
            expect(utils.getHiddenTagsFromMarkdown("TEST", body)).toBeNull();
        });

        test('Parse Nested Duplicate Tags', () => {
            const body = `
<!-- START_TEST -->
FOO
<!-- START_TEST -->
<!-- END_TEST -->
`;
            expect(utils.getHiddenTagsFromMarkdown("TEST", body)).toBeNull();
        });

        test('Parse Misplaced Duplicate Tags', () => {
            const body = `
<!-- START_TEST -->
<!-- END_TEST -->
FOO
<!-- END_TEST -->
`;
            expect(utils.getHiddenTagsFromMarkdown("TEST", body)).toBeNull();
        });

        test('Parse Overlapping Duplicate Tags', () => {
            const body = `
<!-- START_TEST -->
FOO
<!-- END_TEST -->
<!-- END_TEST -->
`;
            expect(utils.getHiddenTagsFromMarkdown("TEST", body)).toBeNull();
        });
    });

    describe('Missing Tags', () => {
        test('Parse Missing Start Tag', () => {
            const body = `
<!-- START_TEST -->
`;
            expect(utils.getHiddenTagsFromMarkdown("TEST", body)).toBeNull();
        });

        test('Parse Missing End Tag', () => {
            const body = `
<!-- END_TEST -->
`;
            expect(utils.getHiddenTagsFromMarkdown("TEST", body)).toBeNull();
        });
    });

    describe('Case Insensitive Tags', () => {
        test('Parse Case Insensitive Start Tag', () => {
            const body = `
<!-- start_test -->
FOO
<!-- END_TEST -->
`;
            const expected = `FOO`;
            expect(utils.getHiddenTagsFromMarkdown("TEST", body)).toBe(expected);
        });

        test('Parse Case Insensitive End Tag', () => {
            const body = `
<!-- START_TEST -->
FOO
<!-- end_test -->
`;
            const expected = `FOO`;
            expect(utils.getHiddenTagsFromMarkdown("TEST", body)).toBe(expected);
        });
    });

    describe('Tags with Inner Newlines', () => {
        test('Parse Tags with Inner Newlines', () => {
            const body = `
<!-- START_TEST -->

FOO

<!-- END_TEST -->
`;
            const expected = `
FOO
`;
            expect(utils.getHiddenTagsFromMarkdown("TEST", body)).toEqual(expected);
        });

        test('Parse Tags with Inner Newlines (Leading Newline)', () => {
            const body = `
<!-- START_TEST -->
FOO

<!-- END_TEST -->
`;
            const expected = `FOO
`;
            expect(utils.getHiddenTagsFromMarkdown("TEST", body)).toEqual(expected);
        });

        test('Parse Tags with Inner Newlines (Trailing Newline)', () => {
            const body = `
<!-- START_TEST -->

FOO
<!-- END_TEST -->
`;
            const expected = `
FOO`;
            expect(utils.getHiddenTagsFromMarkdown("TEST", body)).toEqual(expected);
        });
    });
});

