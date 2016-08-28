var sfb  = new function() {
    // public functions
    this.tooltipify = tooltipify;
    // private
    var $tooltip;
    
    // initialization
    $(function() {
      // init tooltips      
      $tooltip = $("<div>").attr("id", "tooltip").appendTo("body"); // create the tooltip element which is reused
      tooltipify($("div.info-icon"));
    });
    
    // function declarations
    function tooltipify($elements) {
        $elements.mouseenter(function() {
            var $this = $(this);
            var offset = $this.offset();
            offset.left += $this.width();
            $tooltip.css({
                top: offset.top,
                left: offset.left
            });
            var data = $this.data("htmlData");
            if (data) {
                $tooltip.html(data);
            } else {
                $tooltip.text($this.data("title"));
            }
            $tooltip.show();
        }).mouseleave(function() {
            $tooltip.hide();
        }).each(function() {
            var $this = $(this);
            var $infoText = $this.children("div.info-text");
            if ($infoText.length > 0) {
                $this.data("htmlData", $infoText.html());
            } else {
                $this.data("title", $this.attr("title"));
            }
            $this.attr("title", "");
        });
    }
};