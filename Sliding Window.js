//滑动窗口 维护一个动态的区间（即窗口），这个窗口在数据结构中滑动，不断扩展或缩小，直到满足某些条件

var findAnagrams = function (s, p) {
    const parr=[]
    const nowarr=[]
    let left=0
    const sarr=[]
    for(let i=0;i<p.length;i++){
        parr[p[i].charCodeAt(0)-'a'.charCodeAt(0)]++
    }
    for(let right=0;right<s.length;right++){
      nowarr[s[right].charCodeAt(0)-'a'.charCodeAt(0)]++
      if(right-left+1>p.length){
        nowarr(s[left].charCodeAt(0)-'a'.charCodeAt(0))--
         left++
      }
      if(right-left+1==p.length&&isEqual(nowarr,parr)){
        sarr.push(left)
      }
    }
    return sarr
   
};
function isEqual(s,p){
    for(let i=0;i<26;i++){
        if(s[i]!=p[i]){
            return false
        }
    }
    return true
}