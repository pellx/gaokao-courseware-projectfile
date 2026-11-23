import React from 'react';
import {AutoScene} from '../components/auto';

export const Rocket: React.FC = () => <AutoScene k="rocket" d={{"tag": "考点六", "title": "火箭的原理", "blocks": [{"t": "chain", "steps": [{"at": "k1", "text": "燃料燃烧"}, {"at": "k2", "text": "燃气{向后}高速喷出"}, {"at": "k2", "text": "火箭{向前}反冲"}], "arrows": []}, {"t": "rule", "tag": "太空中", "at": "k3", "text": "不需要空气，同样可以{加速}", "c": "orange"}], "callout": {"label": "易错", "at": "k4", "text": "火箭靠{反冲}，不靠推空气"}, "beat": {"k": "jet", "at": "k3b", "text": "燃气{向后喷|red}\n扫帚{向前冲|red}"}}} />;
