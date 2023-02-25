

        1

        /**
        method to find the offset for the looking for html element
        */

        let aTags = document.getElementsByTagName("a");
        let searchText = "Test Ideenforum";
        let found;
        let offset = 0;

        for (let i = 0; i < aTags.length; i++) {
          if (aTags[i].textContent.includes(searchText)) {

            found = aTags[i].parentElement.style="background-color : yellow";
            if(offset > 0)    found = aTags[i].textContent= aTags[i].textContent+ " || offset: "+ offset;
            else found = aTags[i].textContent=aTags[i].textContent + " || offset not needed ";
            offset = offset + 1;
          }
        }

        2.

        /**
        element: the html element which includes the search textContent
        searchText: the text to search
        offset: the offset to ignore the elements which are found before
        searchProp: the place where the text is defined. default textContent. can be overridden e.g. placeholder
        */

        const hidingItems = [
          {element:"a", searchText:" Wissensdatenbank", offset: 1},
          {element:"h1", searchText:"Willkommen bei Helpdesk!"},
          {element:"a", searchText:" Test Ideenforum", offset: 2},
          {element:"input", searchText:"Suche Wissensdatenbank...", searchProp: "placeholder"},
        ];

        hidingItems.forEach((item) => {

          let aTags = document.getElementsByTagName(item.element);
          let counter = 0;
          let searchProp= item.searchProp || "textContent"

          for (let i = 0; i < aTags.length; i++) {
            if (aTags[i][searchProp].includes(item.searchText)) {
            if(!item.offset || counter >= item.offset)  {
              found = aTags[i].parentElement.style = "display:none";
              break;
            }
              counter = counter + 1;
            }
          }
        });
