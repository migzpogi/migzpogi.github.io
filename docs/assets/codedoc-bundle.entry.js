import { getRenderer } from '/home/migzubuntu/gitprojects/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/transport/renderer.js';
import { initJssCs } from '/home/migzubuntu/gitprojects/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/transport/setup-jss.js';initJssCs();
import { installTheme } from '/home/migzubuntu/gitprojects/migzpogi.github.io/.codedoc/content/theme.ts';installTheme();
import { codeSelection } from '/home/migzubuntu/gitprojects/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from '/home/migzubuntu/gitprojects/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from '/home/migzubuntu/gitprojects/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from '/home/migzubuntu/gitprojects/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from '/home/migzubuntu/gitprojects/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from '/home/migzubuntu/gitprojects/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from '/home/migzubuntu/gitprojects/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from '/home/migzubuntu/gitprojects/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from '/home/migzubuntu/gitprojects/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from '/home/migzubuntu/gitprojects/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from '/home/migzubuntu/gitprojects/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/search/post-nav/index.js';postNavSearch();
import { copyLineLinks } from '/home/migzubuntu/gitprojects/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-links/copy-line-link.js';copyLineLinks();
import { ToCPrevNext } from '/home/migzubuntu/gitprojects/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/prevnext/index.js';
import { ToCToggle } from '/home/migzubuntu/gitprojects/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toggle/index.js';
import { DarkModeSwitch } from '/home/migzubuntu/gitprojects/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/darkmode/index.js';
import { ConfigTransport } from '/home/migzubuntu/gitprojects/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/transport/config.js';
import { TabSelector } from '/home/migzubuntu/gitprojects/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/tabs/selector.js';
import { CollapseControl } from '/home/migzubuntu/gitprojects/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/collapse/collapse-control.js';

const components = {
  'uFnrvcJ+D1F1GDCh65DQAw==': ToCPrevNext,
  'SWqLNoA0MvrMLz5OC3Afig==': ToCToggle,
  'd6qGVPx99lKPu2PLJuKqIQ==': DarkModeSwitch,
  'lqCTtIEwAWbDZIUT6vFTOw==': ConfigTransport,
  'fy98CTzf8FViHeU0sP48hA==': TabSelector,
  '0866BrlkclpEOc1LwO/nOg==': CollapseControl
};

const renderer = getRenderer();
const ogtransport = window.__sdh_transport;
window.__sdh_transport = function(id, hash, props) {
  if (hash in components) {
    const target = document.getElementById(id);
    renderer.render(renderer.create(components[hash], props)).after(target);
    target.remove();
  }
  else if (ogtransport) ogtransport(id, hash, props);
}
