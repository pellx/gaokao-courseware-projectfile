import React from 'react';
import {AutoScene} from '../components/auto';

export const Inner: React.FC = () => <AutoScene k="inner" d={{"tag": "考点七", "title": "内能", "blocks": [{"t": "big", "at": "i1", "text": "内能 = 所有分子的{动能} + {分子势能|orange}", "size": 46}, {"t": "text", "at": "i2", "text": "{一切物体|orange}都具有内能", "size": 36}], "callout": {"label": "要点", "at": "i3", "text": "内能针对{大量分子}"}, "beat": {"k": "pair", "at": "i2b", "text": "内能 =\n{分子动能 + 分子势能|red}"}}} />;
