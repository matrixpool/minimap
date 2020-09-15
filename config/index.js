import path from "path";

const config = {
  projectName: "mini_map",
  date: "2020-9-7",
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: "src",
  outputRoot: "dist",
  plugins: [],
  defineConstants: {},
  copy: {
    patterns: [],
    options: {}
  },
  framework: "react",
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {}
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]"
        }
      }
    }
  },
  h5: {
    publicPath: "/",
    staticDirectory: "static",
    postcss: {
      autoprefixer: {
        enable: true,
        config: {}
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]"
        }
      }
    }
  },
  alias: {
    "@/api": path.resolve(__dirname, "..", "src/api")
    // "@/component": path.resolve(__dirname, "..", "src/component"),
    // "@/hooks": path.resolve(__dirname, "..", "src/hooks"),
    // "@/models": path.resolve(__dirname, "..", "src/models"),
    // "@/page": path.resolve(__dirname, "..", "src/page"),
    // "@/config": path.resolve(__dirname, "..", "src/config")
  }
};

export default function(merge) {
  if (process.env.NODE_ENV.search("development") !== -1) {
    console.log(
      merge({}, config, require("./dev")),
      "这儿有BASE_URL哈================================"
    );
    return merge({}, config, require("./dev"));
  }
  return merge({}, config, require("./prod"));
}
