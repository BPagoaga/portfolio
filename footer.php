<!-- Footer -->
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-10 col-lg-offset-1 text-center">
                    <h4><strong>Bernard Pagoaga</strong>
                    </h4>
                    <p>26 Avenue de Lattre de Tassigny
                        <br>59350 - Saint André Lez Lille</p>
                    <ul class="list-unstyled">
                        <li><i class="fa fa-phone fa-fw"></i><a href="tel:0637352541">06 37 35 25 41</a></li>
                        <li><i class="fa fa-envelope-o fa-fw"></i> <a href="mailto:bernard.pagoaga@gmail.com">bernard.pagoaga@gmail.com</a>
                        </li>
                        <li><a href="files/Bernard Pagoaga - Développeur Front-end.pdf" target="_blank">Télécharger mon C.V</a></li>
                    </ul>
                    <br>
                    <ul class="list-inline">
                        <li>
                            <a href="https://www.facebook.com/people/Bernard-Pagoaga/100009005267393" target="_blank"><i class="fa fa-facebook fa-fw fa-2x"></i></a>
                        </li>
                        <li>
                            <a href="https://twitter.com/bpagoaga?lang=fr" target="_blank"><i class="fa fa-twitter fa-fw fa-2x"></i></a>
                        </li>
                        <li>
                            <a href="https://fr.linkedin.com/in/bernard-pagoaga-a7307470" target="_blank"><i class="fa fa-linkedin fa-fw fa-2x"></i></a>
                        </li>
                        <li>
                            <a href="https://github.com/BPagoaga" target="_blank"><i class="fa fa-github fa-fw fa-2x"></i></a>
                        </li>
                        <li>
                            <a href="http://codepen.io/BPagoaga/#" target="_blank"><i class="fa fa-codepen fa-fw fa-2x"></i></a>
                        </li>
                    </ul>
                    <hr class="small">
                    <p class="text-muted">Copyright &copy; Bernard Pagoaga 2015 - 2016</p>
                </div>
            </div>
        </div>
        <a id="to-top" href="#top" class="btn btn-dark btn-lg"><i class="fa fa-chevron-up fa-fw fa-1x"></i></a>
    </footer>

    <!-- jQuery -->
    <script src="js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="js/main.js"></script>
    <script>
    // Closes the sidebar menu
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    // Scrolls to the selected menu item on the page
    $(function() {
        $('a[href*=#]:not([href=#],[data-toggle],[data-target],[data-slide])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    //#to-top button appears after scrolling
    var fixed = false;
    $(document).scroll(function() {
        if ($(this).scrollTop() > 250) {
            if (!fixed) {
                fixed = true;
                // $('#to-top').css({position:'fixed', display:'block'});
                $('#to-top').show("slow", function() {
                    $('#to-top').css({
                        position: 'fixed',
                        display: 'block'
                    });
                });
            }
        } else {
            if (fixed) {
                fixed = false;
                $('#to-top').hide("slow", function() {
                    $('#to-top').css({
                        display: 'none'
                    });
                });
            }
        }
    });
    // Disable Google Maps scrolling
    // See http://stackoverflow.com/a/25904582/1607849
    // Disable scroll zooming and bind back the click event
    var onMapMouseleaveHandler = function(event) {
        var that = $(this);
        that.on('click', onMapClickHandler);
        that.off('mouseleave', onMapMouseleaveHandler);
        that.find('iframe').css("pointer-events", "none");
    }
    var onMapClickHandler = function(event) {
            var that = $(this);
            // Disable the click handler until the user leaves the map area
            that.off('click', onMapClickHandler);
            // Enable scrolling zoom
            that.find('iframe').css("pointer-events", "auto");
            // Handle the mouse leave event
            that.on('mouseleave', onMapMouseleaveHandler);
        }
        // Enable map zooming with mouse scroll when the user clicks the map
    $('.map').on('click', onMapClickHandler);
    </script>

    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-59608345-1', 'auto');
      ga('send', 'pageview');

</script>

</body>

</html>
