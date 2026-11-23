import React from 'react';
import {AutoScene} from '../components/auto';

export const Steps: React.FC = () => <AutoScene k="steps" d={{"tag": "考点五", "title": "关键步骤与注意事项", "blocks": [{"t": "chain", "steps": [{"at": "s1", "text": "检查{皮带}和{小球}的位置"}, {"at": "s2", "text": "摇速{平稳}、逐渐加快"}, {"at": "s2", "text": "示数{稳定}后读数"}, {"at": "s3", "text": "转速{不宜过快}"}], "arrows": []}], "callout": {"label": "要点", "at": "s4", "text": "只改变一个量；{示数稳定}后读数"}}} />;
