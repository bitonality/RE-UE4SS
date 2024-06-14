const generateMarkdownFromTemplate = require('../utils.js').generateMarkdownFromTemplate;
const addArtifactReportToPullRequest = require('../report-artifacts-to-pull-request.js');

jest.mock('../utils.js', () => ({
    generateMarkdownFromTemplate: jest.fn(),
}));

const createMockGithub = (artifacts = [
    {
        name: 'MSVC-Game__Shipping__Win64-SHA',
        size_in_bytes: 1024,
        updated_at: '2023-01-01T00:00:00Z',
        expires_at: '2023-01-08T00:00:00Z'
    }
]) => {
    return {
        rest: {
            actions: {
                listWorkflowRunArtifacts: {
                    endpoint: {
                        merge: jest.fn().mockResolvedValue({})
                    }
                }
            }
        },
        paginate: jest.fn().mockResolvedValue(artifacts)
    };
};
const createMockContext = () => {
    return {
        repo: {
            owner: 'owner',
            repo: 'repo'
        },
        runId: 123,
        serverUrl: 'https://github.com',
        payload: {
            pull_request: {
                head: {
                    sha: 'prCommitSha'
                }
            }
        },
        sha: 'mergeCommitSha'
    };
};

describe('addArtifactReportToPullRequest', () => {
    let github;
    let context;
    let outputPath;
    let handlebars;

    beforeEach(() => {
        github = createMockGithub();

        context = createMockContext();
        outputPath = 'output/path';
        handlebars = {};

        jest.clearAllMocks();
    });

    test('calls generateMarkdownFromTemplate with correct parameters', async () => {
        await addArtifactReportToPullRequest({ github, context }, outputPath, handlebars);

        expect(generateMarkdownFromTemplate).toHaveBeenCalledWith(
            "./.github/utils/markdown-templates/pull-request-artifact.hbs",
            {
                artifact: [
                    {
                        badgeName: 'MSVC-Game__Shipping__Win64',
                        logsUrl: 'https://github.com/owner/repo/actions/runs/123',
                        prCommit: 'prCommitSha',
                        mergeCommit: 'mergeCommitSha',
                        size: 1024,
                        lastUpdated: new Date('2023-01-01T00:00:00Z'),
                        expiresAt: new Date('2023-01-08T00:00:00Z')
                    }
                ]
            },
            outputPath,
            handlebars
        );
    });

    test('returns early if no artifacts are found', async () => {
        github = createMockGithub([]);
        
        await addArtifactReportToPullRequest({ github, context }, outputPath, handlebars);

        expect(generateMarkdownFromTemplate).not.toHaveBeenCalled();
    });

    test('handles artifact name of an unsupported format', async () => {
        github = createMockGithub([
            {
                name: 'malformedOrUnknownArtifactName',
                size_in_bytes: 2048,
                updated_at: '2023-01-01T00:00:00Z',
                expires_at: '2023-01-08T00:00:00Z'
            }
        ]);

        await addArtifactReportToPullRequest({ github, context }, outputPath, handlebars);

        expect(generateMarkdownFromTemplate).toHaveBeenCalledWith(
            "./.github/utils/markdown-templates/pull-request-artifact.hbs",
            {
                artifact: [
                    {
                        badgeName: 'Build-Success',
                        logsUrl: 'https://github.com/owner/repo/actions/runs/123',
                        prCommit: 'prCommitSha',
                        mergeCommit: 'mergeCommitSha',
                        size: 2048,
                        lastUpdated: new Date('2023-01-01T00:00:00Z'),
                        expiresAt: new Date('2023-01-08T00:00:00Z')
                    }
                ]
            },
            outputPath,
            handlebars
        );
    });
});
