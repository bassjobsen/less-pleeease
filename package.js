Package.describe({
  name: "bassjobsen:less-pleeease",
  summary: "Postprocess Less using pleeease (including autoprefixer).",
  version: "0.0.1",
  git: "https://github.com/bassjobsen/less-pleeease"
});

Package._transitional_registerBuildPlugin({
  name: "compileLess",
  use: [],
  sources: [
    'plugin/compile-less.js'
  ],
  npmDependencies: {
    "less": "2.2.0",
    "less-plugin-pleeease": "0.0.2"
  }
});

Package.on_test(function (api) {
  api.use(['test-helpers', 'tinytest', 'less', 'templating']);
  api.add_files(['less_tests.less', 'less_tests.js', 'less_tests.html',
                 'less_tests_empty.less'],
                'client');
});
