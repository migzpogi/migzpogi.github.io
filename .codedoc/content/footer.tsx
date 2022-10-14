import { CodedocConfig } from '@codedoc/core';
import { Footer as _Footer, GitterToggle$, Watermark} from '@codedoc/core/components';


export function Footer(config: CodedocConfig, renderer: any) {
  // let github$;
  // if (config.misc?.github)
  //   github$ = <a href={`https://github.com/${config.misc.github.user}/${config.misc.github.repo}/`} 
  //               target="_blank">GitHub</a>;

  // let community$;
  // if (config.misc?.gitter)
  //   community$ = <GitterToggle$ room={config.misc.gitter.room}/>

  // if (github$ && community$) return <_Footer>{github$}<hr/>{community$}</_Footer>;
  // else if (github$) return <_Footer>{github$}</_Footer>;
  // else if (community$) return <_Footer>{community$}</_Footer>;
  // else return <_Footer><Watermark/></_Footer>;
  return <_Footer>
  <a href="/index">Home</a>
  <hr/>
  <a href="/posts">Posts</a>
  <hr/>
  <a href="http://onemiguel.es">Blog</a>
  <hr/>
  <a href="https://github.com/CONNECT-platform/codedoc/">Codedoc</a>
</_Footer>;
}
