# 重试

```js
function retry(callback, nTimes) {
  // if the promise fails
  return callback().catch(function(reason) {
    // if we haven't hit the retry limit
    if (nTimes-- > 0) {
      // retry again with the result of calling the retry callback
      // and the new retry limit
      return retry(callback, nTimes)
    }

    // otherwise, if we hit the retry limit, rethrow the error
    throw reason
  })
}

// try to save the post up to 5 times
retry(function() {
  return post.save()
}, 5)
```
