
function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
    let highlightedHTML = htmlContent;
  
    
    let offset = 0;
    for (const position of plainTextPositions) {
      const start = position.start + offset;
      const end = position.end + offset;
      
     
      const openTag = '<mark>';
      const closeTag = '</mark>';
      highlightedHTML = 
        highlightedHTML.slice(0, start) + openTag + highlightedHTML.slice(start, end) + closeTag + highlightedHTML.slice(end);
      
   
      offset += openTag.length + closeTag.length;
    }
  
    return highlightedHTML;
  }
  
 