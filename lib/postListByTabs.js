export const testPostListsByTabs = [
    {
        index: 0,
        tabName: 'Announcement',
        posts: [
            {
                author: {
                    displayName: 'hamilton_2001',
                    isHost: true,
                },
                contentMarkdown: `
                # h1 Heading
                ## h2 Heading
                ### h3 Heading
                #### h4 Heading
                ##### h5 Heading sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                ###### h6 Heading

                **This is bold text**

                __This is bold text__

                *This is italic text*

                _This is italic text_

                ~~Strikethrough~~

                - [ ] Task list 1
                - [ ] Pending task list 2
                - [x] Completed task list 3
                - [x] Completed task list 4 
                \`\`\` js
                var foo = function (bar) {
                return bar++;
                };

                console.log(foo(5));
                \`\`\`
                `
            },
            {
                author: {
                    displayName: 'hamilton_2002',
                    isHost: true,
                },
                contentMarkdown: `# Welcome!
                Welcome to our first CMU cheese eating contest.`,
            },
            {
                author: {
                    displayName: 'hamilton_2003',
                    isHost: true,
                },
                contentMarkdown: `# Welcome!
                Welcome to our first CMU cheese eating contest.`,
            },
        ],
    },
    {
        index: 1,
        tabName: 'Rules',
        posts: [
            {
                author: {
                    displayName: 'hamilton_2001',
                    isHost: true,
                },
                contentMarkdown: `# Welcome!
            Welcome to our first CMU cheese eating contest.`,
            },
        ],
    },
    {
        index: 2,
        tabName: 'Reward',
        posts: [
            {
                author: {
                    displayName: 'hamilton_2001',
                    isHost: true,
                },
                contentMarkdown: `# Welcome!
            Welcome to our first CMU cheese eating contest.`,
            },
        ],
    },
    {
        index: 3,
        tabName: 'Community',
        posts: [
            {
                author: {
                    displayName: 'hamilton_2001',
                    isHost: true,
                },
                contentMarkdown: `# Welcome!
            Welcome to our first CMU cheese eating contest.`,
            },
        ],
    },
    {
        index: 4,
        tabName: 'Leaderboard',
        posts: [
            {
                author: {
                    displayName: 'hamilton_2001',
                    isHost: true,
                },
                contentMarkdown: `# Welcome!
            Welcome to our first CMU cheese eating contest.`,
            },
        ],
    },
];
