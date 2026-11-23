import React from 'react';
import {AutoScene} from '../components/auto';

export const Compare: React.FC = () => <AutoScene k="compare" d={{"tag": "考点八", "title": "跃迁与电离辨析", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "吸收光子跃迁", "at": "h1", "lines": ["hν {恰好等于}能级差", "10.2 eV ✓　11 eV ✗"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "吸收光子电离", "at": "h2", "lines": ["hν {≥} 电离能", "多余的变成电子动能"], "c": "orange", "size": 32}]}]}], "callout": {"label": "易错", "at": "h4", "text": "跃迁：{恰好等于}；电离：{大于等于}"}}} />;
