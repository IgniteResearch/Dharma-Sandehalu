/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

 import React, { useRef, useCallback, useState } from "react";
 import classnames from "classnames";
 import { useHistory } from "@docusaurus/router";
 import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
 import { usePluginData } from '@docusaurus/useGlobalData';
 import "./styles.css"
 const Engine = props => {
   const initialized = useRef(false);
   const searchBarRef = useRef(null);
   const [indexReady, setIndexReady] = useState(false);
   const history = useHistory();
   const { siteConfig = {}, isClient = false } = useDocusaurusContext();
   const { baseUrl } = siteConfig;
   const initAlgolia = (searchDocs, searchIndex, DocSearch) => {
     new DocSearch({
       searchDocs,
       searchIndex,
       inputSelector: "#engine_input_react",
       // Override algolia's default selection event, allowing us to do client-side
       // navigation and avoiding a full page refresh.
       handleSelected: (_input, _event, suggestion) => {
         const url = baseUrl + suggestion.url;
         // Use an anchor tag to parse the absolute url into a relative url
         // Alternatively, we can use new URL(suggestion.url) but its not supported in IE
         const a = document.createElement("a");
         a.href = url;
         // Algolia use closest parent element id #__docusaurus when a h1 page title does not have an id
         // So, we can safely remove it. See https://github.com/facebook/docusaurus/issues/1828 for more details.
 
         history.push(url);
       }
     });
   };
 
   const pluginData = usePluginData('docusaurus-lunr-search');
   const getSearchDoc = () =>
     fetch(`${baseUrl}${pluginData.fileNames.searchDoc}`).then((content) => content.json())
 
   const getLunrIndex = () =>
     fetch(`${baseUrl}${pluginData.fileNames.lunrIndex}`).then((content) => content.json())
 
 
   const loadAlgolia = () => {
     if (!initialized.current) {
       Promise.all([
         getSearchDoc(),
         getLunrIndex(),
         import("./lib/DocSearch"),
         // import("./algolia.css")
       ]).then(([searchDocs, searchIndex, { default: DocSearch }]) => {
         if (searchDocs.length === 0) {
           return;
         }
         initAlgolia(searchDocs, searchIndex, DocSearch);
         setIndexReady(true);
       });
       initialized.current = true;
     }
   };
 
   const toggleSearchIconClick = useCallback(
     e => {
       if (!searchBarRef.current.contains(e.target)) {
         searchBarRef.current.focus();
       }
 
       props.handleSearchBarToggle && props.handleSearchBarToggle(!props.isSearchBarExpanded);
     },
     [props.isSearchBarExpanded]
   );
 
   if (isClient) {
     loadAlgolia();
   }
 
   return (
     <center>
       <div id="engine_bar" class="bar">
         <input id="engine_input_react" className="searchbar" type="search" title="Search" onClick={loadAlgolia} onMouseOver={loadAlgolia} />
       </div>
     </center>
   );
 };
 
 
 export default Engine;
 