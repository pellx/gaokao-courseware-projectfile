import React from 'react';
import {AutoScene} from '../components/auto';

export const Index: React.FC = () => <AutoScene k="index" d={{"tag": "考点三", "title": "折射率", "blocks": [{"t": "rule", "tag": "定义", "at": "c1", "text": "光从{真空}射入介质", "c": "red"}, {"t": "big", "at": "c2", "text": "n = {sinθ_1 / sinθ_2}", "size": 56}, {"t": "text", "at": "c3", "text": "反映介质的{光学性质}", "size": 34}], "callout": {"label": "要点", "at": "c4", "text": "n 越大，{偏折越明显}"}}} />;
