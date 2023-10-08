import { CodedocConfig } from '@codedoc/core';
import { Footer as _Footer, GitterToggle$, Watermark} from '@codedoc/core/components';


export function Footer(config: CodedocConfig, renderer: any) {
  return <_Footer>
  <a href="/index">Home</a>
  <hr/>
  <a href="http://onemiguel.es">Blog</a>
</_Footer>;
}
