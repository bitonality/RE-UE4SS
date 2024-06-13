const utils = require('../utils');
expect.
test('parseMarkdownChecklist', () => {
const validChecklist = `
# Artifacts To Upload
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

});