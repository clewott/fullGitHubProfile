$(document).ready(function() {

  var homePage = {

      init: function() {
        homePage.initStyling();
        homePage.initEvents();
      },
      initStyling: function() {
        homePage.renderText($(".sectionTop"));

        homePage.renderPictures($(".sectionBottom"));

        homePage.renderRepos($("#tab2"));

        homePage.renderEvents($("#tab3"));


      },
      initEvents: function() {},
      render: function(template, data, $target) {
          var tmpl = _.template(template, data);

          $target.append(tmpl);

      },
      renderText: function($target) {
        homePage.render($("#profilecardTmpl").html(), userDataArray, $target);

      },
      renderPictures: function($target) {
        homePage.render($("#orgsTmpl").html(), orgDataArray, $target);

      },
      renderRepos: function($target) {
        homePage.render($("#reposTmpl").html(), userReposArray, $target);

      },
      renderEvents: function($target) {
        homePage.render($("#pEventsTmpl").html(),userEventsArray, $target);

      },


  };


homePage.init();



});
