function embedSVG() {
  $("span.embed-svg").each((i,elem)=>{
    let attr = {};
    let uid  = Math.floor(Math.random() * (Math.pow(2,32))).toString(16);
    while ($(`#${uid}`).length > 0) { // Protection, in the rare case where we would have the same 32-bit hexadecimal value twice
      uid = Math.floor(Math.random() * (Math.pow(2,32))).toString(16);
    }

    attr['width']     = ($(elem).attr('width') ? $(elem).attr('width') : "auto");
    attr['height']    = ($(elem).attr('height') ? $(elem).attr('height') : "auto");
    attr['src']       = $(elem).attr('src');
    attr['style']     = ($(elem).attr('style') ? $(elem).attr('style') : "");
    attr['svg-style'] = ($(elem).attr('svg-style') ? $(elem).attr('svg-style') : "");
    attr['class']     = $(elem).attr('class').replace(/(\s|^)(embed\-svg)+(?=(\s|$))/,"");

    $.get(attr['src'], (m)=>{
      $(elem).replaceWith(`<span id='${uid}' class='embedded-svg' style="${attr['style']}">${m.documentElement.outerHTML}</span>`);
      $(`#${uid}`).children("svg").removeAttr('width', 'height').css({
        'width': attr['width'],
        'height': attr['height']
      });
      $(`#${uid}`).children("svg").children().attr('style', attr['svg-style']);
      if (attr['class'].length) {
        $(`#${uid}`).attr('class', $(`#${uid}`).attr('class')+" "+attr['class']);
      }
    });
  });
}

$(document).ready(()=>{
  embedSVG();
});
