/*
    Write a function that when given a URL as a string,
    parses out just the domain name and returns it as a string. For example:

    domainName("http://github.com/carbonfive/raygun") == "github"
    domainName("http://www.zombie-bites.com") == "zombie-bites"
    domainName("https://www.cnet.com") == "cnet"
*/

function domainName(url){
  // Strip out the protocol scheme and sub-domain
  let domain = url.replace('http://', '').replace('https://', '').replace('www.', '')
  console.log(`domain: ${domain}`)

  // Split the domain & return the first index
  let domainName = domain.split(/\./)
  console.log(`domain name: ${domainName}`)

  return domainName[0]
}

console.log(domainName("https://youtube.com")) // => youtube
console.log(domainName("www.xakep.ru")) // => xakep
console.log(domainName("http://google.co.jp")) // => google
console.log(domainName("http://google.com")) // => google
console.log(domainName("http://www.codewars.com")) // => codewars
console.log(domainName("casdfs-asdfasd.com")) // => casdfs-asdfasd
