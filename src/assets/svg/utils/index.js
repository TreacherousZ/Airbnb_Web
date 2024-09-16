function styleStringToObject(StyleStr){
    const obj = {}
    // /-(.)/：正则匹配到—的时候转换为大写
    const s = StyleStr.toLowerCase().replace(/-(.)/g, function (m, g) {
        return g.toUpperCase();
      }).replace(/;\s?$/g,"").split(/:|;/g);
      for (var i = 0; i < s.length; i += 2)
          {
            obj[s[i].replace(/\s/g,"")] = s[i+1].replace(/^\s+|\s+$/g,"");
          }
      return obj;
}
export default styleStringToObject