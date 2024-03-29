import { getRenderer } from '/home/migzlegionubuntu/ubuntu_git/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/transport/renderer.js';
import { initJssCs } from '/home/migzlegionubuntu/ubuntu_git/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/transport/setup-jss.js';initJssCs();
import { installTheme } from '/home/migzlegionubuntu/ubuntu_git/migzpogi.github.io/.codedoc/content/theme.ts';installTheme();
import { codeSelection } from '/home/migzlegionubuntu/ubuntu_git/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from '/home/migzlegionubuntu/ubuntu_git/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from '/home/migzlegionubuntu/ubuntu_git/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from '/home/migzlegionubuntu/ubuntu_git/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from '/home/migzlegionubuntu/ubuntu_git/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from '/home/migzlegionubuntu/ubuntu_git/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from '/home/migzlegionubuntu/ubuntu_git/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from '/home/migzlegionubuntu/ubuntu_git/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from '/home/migzlegionubuntu/ubuntu_git/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from '/home/migzlegionubuntu/ubuntu_git/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from '/home/migzlegionubuntu/ubuntu_git/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/search/post-nav/index.js';postNavSearch();
import { copyLineLinks } from '/home/migzlegionubuntu/ubuntu_git/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-links/copy-line-link.js';copyLineLinks();
import { gatherFootnotes } from '/home/migzlegionubuntu/ubuntu_git/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/footnote/gather-footnotes.js';gatherFootnotes();
import { ToCToggle } from '/home/migzlegionubuntu/ubuntu_git/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toggle/index.js';
import { DarkModeSwitch } from '/home/migzlegionubuntu/ubuntu_git/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/darkmode/index.js';
import { ConfigTransport } from '/home/migzlegionubuntu/ubuntu_git/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/transport/config.js';
import { TabSelector } from '/home/migzlegionubuntu/ubuntu_git/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/tabs/selector.js';
import { CollapseControl } from '/home/migzlegionubuntu/ubuntu_git/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/collapse/collapse-control.js';
import { ToCPrevNext } from '/home/migzlegionubuntu/ubuntu_git/migzpogi.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/prevnext/index.js';

const components = {
  '2KQ/U4adi/Z/oAWMjb12/g==': ToCToggle,
  'jR4pIl18XyJlqy0MRQ030Q==': DarkModeSwitch,
  'aa09u7XPvNn0PoGLSC9eYA==': ConfigTransport,
  'wbEYsoiy+k0DlDA91YBqcg==': TabSelector,
  'Nhhl4b58B/csvm7vrQnzrg==': CollapseControl,
  'u57FALME0msFjeOPW2+9hg==': ToCPrevNext
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
