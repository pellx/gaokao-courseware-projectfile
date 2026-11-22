import React from 'react';
import {AutoScene} from '../components/auto';

export const Loop: React.FC = () => <AutoScene k="loop" d={{"tag": "考点一", "title": "闭合电路的组成", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "外电路", "at": "a2", "lines": ["用电器 + 导线", {"at": "a4", "text": "电流：正极 → 负极"}], "c": "orange", "size": 32}]}, {"blocks": [{"t": "panel", "title": "内电路", "at": "a2", "lines": ["电源内部", {"at": "a3", "text": "有{内阻 r}"}, {"at": "a4", "text": "电流：负极 → {正极}"}], "c": "red", "size": 32}]}]}], "callout": {"label": "要点", "at": "a5", "text": "闭合电路 = 外电路 + {内电路}"}}} />;
