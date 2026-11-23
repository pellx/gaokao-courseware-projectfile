import React from 'react';
import {AutoScene} from '../components/auto';

export const Restore: React.FC = () => <AutoScene k="restore" d={{"tag": "考点一", "title": "回复力", "blocks": [{"t": "rule", "tag": "回复力", "at": "f1", "text": "使物体{回到平衡位置}的力", "c": "red"}, {"t": "rule", "tag": "方向", "at": "f2", "text": "总是{指向平衡位置}", "c": "orange"}, {"t": "items", "items": [{"at": "f3", "text": "按{效果}命名"}, {"at": "f3", "text": "可以是一个力、几个力的{合力}、某个力的{分力}"}], "size": 32}], "callout": {"label": "易错", "at": "f4", "text": "回复力{不是}另外多出的一个力"}}} />;
