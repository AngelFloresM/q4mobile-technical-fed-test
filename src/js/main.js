class ReportWidget {
  constructor() {
    this.options = {
      containerSelector: ".reports",
      template: `
      {{#.}}
        <article class="reports_item">
          <a href="{{cover}}" target="_blank">
            <img class="reports_cover" src="{{cover}}" alt="{{title}} Cover"/>
          </a>
          <footer class="reports_docs">
            {{#documents}}
            <h3 class="reports_title">
              <a href="{{url}}" target="_blank">{{title}} <span>({{file_size}} {{file_type}})</span></a>
            </h3>
            {{/documents}}
          </footer>
        </article> 
      {{/.}}    
      `,
    };
  }

  init() {
    this.renderReports(reportData || []);
  }

  renderReports(reports) {
    $(this.options.containerSelector).html(
      Mustache.render(this.options.template, reports)
    );
  }
}

// This type of object was getting me into troubles so I switched to a class base object

// const reportsWidget = {
//   options: {
//     containerSelector: ".reports",
//     template: `
//     {{#.}}
//       <article class="reports_item">
//         <a href="{{cover}}" target="_blank">
//           <img class="reports_cover" src="{{cover}}" alt="{{title}} Cover"/>
//         </a>
//         <footer class="reports_docs">
//           {{#documents}}
//           <h3 class="reports_title">
//               <a href="{{url}}" target="_blank">{{title}}</a> <span>({{file_size}} {{file_type}})</span>

//           </h3>
//           {{/documents}}
//         </footer>
//       </article>
//     {{/.}}
//     `,
//   },

//   init: () => {
//     this.renderReports(reportData || []);
//   },

//   renderReports: (reports) => {
//     $(this.options.containerSelector).html(
//       Mustache.render(this.options.template, reports)
//     );
//   },
// };

const reportsWidget = new ReportWidget();
reportsWidget.init();
