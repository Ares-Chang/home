export async function useAWord() {
  try {
    const res = await fetch('https://v1.hitokoto.cn/').then(res => res.json())
    return res
  }
  catch (error) {
    return {
      error: true,
      msg: '获取句子失败',
    }
  }
}
