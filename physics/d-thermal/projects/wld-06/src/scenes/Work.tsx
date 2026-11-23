import React from 'react';
import {AutoScene} from '../components/auto';

export const Work: React.FC = () => <AutoScene k="work" d={{"tag": "考点二", "title": "功与内能", "blocks": [{"t": "big", "at": "w2", "text": "绝热：{ΔU = W}", "size": 60}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "外界对系统做功", "at": "w3", "text": "内能{增加}", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "系统对外做功", "at": "w3", "text": "内能{减少|orange}", "c": "orange", "size": 32}]}]}], "callout": {"label": "要点", "at": "w4", "text": "绝热时，功是内能变化的{量度}"}, "beat": {"k": "rub", "at": "w3b", "text": "揉搓做功\n内能{增加|red}"}}} />;
