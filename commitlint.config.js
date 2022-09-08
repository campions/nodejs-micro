module.exports = {
  extends: ["@commitlint/config-conventional"],
  parserPreset: {
    parserOpts: {
      issuePrefixes: ["DEE-"],
    },
  },
  rules: {
    "references-empty": [2, "never"],
  },
};
