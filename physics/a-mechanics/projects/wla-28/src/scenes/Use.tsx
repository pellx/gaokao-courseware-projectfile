import React from 'react';
import {AutoScene} from '../components/auto';

export const Use: React.FC = () => <AutoScene k="use" d={{"tag": "考点五", "title": "反冲的应用与防止", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "利用反冲", "at": "u1", "lines": ["喷灌装置自动{旋转}", {"at": "u2", "text": "章鱼、乌贼{喷水前进}"}], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "防止反冲", "at": "u3", "lines": ["射击时枪身{后坐}", "枪托抵在肩部"], "c": "orange", "size": 32}]}]}], "callout": {"label": "要点", "at": "u4", "text": "反冲：有时{利用}，有时{防止}"}, "beat": {"k": "octo", "at": "u3b", "text": "章鱼把水{向后喷|red}\n自己向前冲"}}} />;
