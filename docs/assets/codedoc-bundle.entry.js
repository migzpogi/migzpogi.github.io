import { getRenderer } from '/home/migzwslnzxt/ubuntu_gitprojects/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/transport/renderer.js';
import { initJssCs } from '/home/migzwslnzxt/ubuntu_gitprojects/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/transport/setup-jss.js';initJssCs();
import { installTheme } from '/home/migzwslnzxt/ubuntu_gitprojects/migzpogi.github.io/.codedoc/content/theme.ts';installTheme();
import { zoomOnFormula } from '/home/migzwslnzxt/ubuntu_gitprojects/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/formula/zoom-on-formula.js';zoomOnFormula();
import { codeSelection } from '/home/migzwslnzxt/ubuntu_gitprojects/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from '/home/migzwslnzxt/ubuntu_gitprojects/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from '/home/migzwslnzxt/ubuntu_gitprojects/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from '/home/migzwslnzxt/ubuntu_gitprojects/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from '/home/migzwslnzxt/ubuntu_gitprojects/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from '/home/migzwslnzxt/ubuntu_gitprojects/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from '/home/migzwslnzxt/ubuntu_gitprojects/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from '/home/migzwslnzxt/ubuntu_gitprojects/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from '/home/migzwslnzxt/ubuntu_gitprojects/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from '/home/migzwslnzxt/ubuntu_gitprojects/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from '/home/migzwslnzxt/ubuntu_gitprojects/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/search/post-nav/index.js';postNavSearch();
import { copyLineLinks } from '/home/migzwslnzxt/ubuntu_gitprojects/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-links/copy-line-link.js';copyLineLinks();
import { gatherFootnotes } from '/home/migzwslnzxt/ubuntu_gitprojects/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/footnote/gather-footnotes.js';gatherFootnotes();
import { ToCToggle } from '/home/migzwslnzxt/ubuntu_gitprojects/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toggle/index.js';
import { DarkModeSwitch } from '/home/migzwslnzxt/ubuntu_gitprojects/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/darkmode/index.js';
import { ConfigTransport } from '/home/migzwslnzxt/ubuntu_gitprojects/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/transport/config.js';
import { CollapseControl } from '/home/migzwslnzxt/ubuntu_gitprojects/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/collapse/collapse-control.js';
import { TabSelector } from '/home/migzwslnzxt/ubuntu_gitprojects/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/tabs/selector.js';
import { ToCPrevNext } from '/home/migzwslnzxt/ubuntu_gitprojects/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/prevnext/index.js';

const components = {
  '+KieMbbjofCG8mi4EMUxhw==': ToCToggle,
  'NqBTEGb5LCZ9A/R386IgBw==': DarkModeSwitch,
  '0fzUui8WISeUIekbH6XOXw==': ConfigTransport,
  'SpFpnsAKsTQ3acQirgVykA==': CollapseControl,
  'gSftm/D577h6CiJyPVdP7Q==': TabSelector,
  'rO4PjVi70GuVKXXpNrRVhw==': ToCPrevNext
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
