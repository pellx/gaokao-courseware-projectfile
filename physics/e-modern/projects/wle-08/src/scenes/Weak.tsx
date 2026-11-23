import React from 'react';
import {AutoScene} from '../components/auto';

export const Weak: React.FC = () => <AutoScene k="weak" d={{"tag": "考点三", "title": "弱相互作用", "blocks": [{"t": "rule", "tag": "弱相互作用", "at": "c1", "text": "引起原子核的 {β 衰变}", "c": "red"}, {"t": "items", "items": [{"at": "c2", "text": "短程力，作用范围比强相互作用{更短}"}, {"at": "c3", "text": "强度比强相互作用、电磁相互作用{弱}"}], "size": 36}], "callout": {"label": "易错", "at": "c4", "text": "β 衰变来自{弱相互作用}"}}} />;
