chrome.bookmarks.onCreated.addListener(async(id, bookmark) => {
    if (!bookmark.unmodifiable && !bookmark.folderType) {
        const url = bookmark.url;
        const urlSplit = url.split("/");
        const domain = urlSplit[2];
        const domainSplit = domain.split(".");
        let webName = domainSplit[0];
        if (domainSplit[0] == "www") {
            webName = domainSplit[1];
        }
        const upperWebName = webName.charAt(0).toUpperCase() + webName.slice(1)
        console.log(upperWebName);
        chrome.bookmarks.update(bookmark.id, {title: upperWebName});
    }
    else {
        console.log("Either this bookmark is unmodifiable or is a folder.");
    }
});