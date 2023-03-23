function sun(a, b) {
  return a + b
}

const promise = new Promise((resolve, reject) => {
  // 异步操作
  if ('异步操作成功') {
    resolve(value);
  } else {
    reject(error);
  }
});

let count = sun(a + b)