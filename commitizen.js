"use strict";

module.exports = {
  types: [
    { value: "init", name: "init: Project/task start" },
    { value: "build", name: "build: Build the project or change dependencies" },
    { value: "feat", name: "feat: Adding new functional" },
    { value: "fix", name: "fix: Bug fixes" },
    { value: "refactor", name: "refactor: Changes for performance improvements" },
    { value: "docs", name: "docs: " }
  ],

  // Поменяем дефолтные вопросы
  messages: {
    type: "What changes are you making?",
    subject: "Write a SHORT description in imperative mood:\n",
    body:
      'Write a DETAIL description (optional). Use "|" for a new line:\n',
    footer:
      "Place for meta data (tickets, links and the rest):\n",
    confirmCommit: "Are you satisfied with the resulting commit?"
  },
  skipQuestions: ['scope', 'footer'],

  allowCustomScopes: false,

  allowBreakingChanges: false,

  footerPrefix: "META DATA:",

  subjectLimit: 72
};