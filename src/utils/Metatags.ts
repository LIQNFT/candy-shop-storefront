export const MetaTagsPage = (newtitle: string = "" , newdes: string = "", newURL: string = "") => {

    let maindes = document.getElementsByName("description")[0];
    let fbtitle =  document.getElementsByName("facebooktitle")[0];
    let fbdes =  document.getElementsByName("facebookdes")[0];
    let fbURL = document.getElementsByName("fbURL")[0];
    let twtittle = document.getElementsByName("twittertitle")[0];
    let twdes = document.getElementsByName("twitterdes")[0];
    let twitterURL = document.getElementsByName("twitterURL")[0];
    return (
        
       
        maindes.setAttribute("content", newdes),
        fbtitle.setAttribute("content", newtitle),
        fbdes.setAttribute("content", newdes),
        fbURL.setAttribute("content", newURL),
        twtittle.setAttribute("content", newtitle),
        twdes.setAttribute("content", newdes),
        twitterURL.setAttribute("content", newURL));
}