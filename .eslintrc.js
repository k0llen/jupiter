module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow the use of `debugger`",
      recommended: true,
      url: "https://eslint.org/docs/latest/rules/no-debugger";
    },

    fixable: null,
    schema: [],

    messages: {
      unexpected: "Unexpected 'debugger' statement";
    }
  }
};
