import React from 'react';
import {AutoScene} from '../components/auto';

export const Dee: React.FC = () => <AutoScene k="dee" d={{"tag": "考点四", "title": "回旋加速器的构造", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "窄缝", "at": "d2", "lines": ["加{交变电压}", "电场使粒子{加速}"], "c": "red", "size": 34}]}, {"blocks": [{"t": "panel", "title": "D 形盒", "at": "d3", "lines": ["处在匀强磁场中", "粒子做{半个圆周}"], "c": "orange", "size": 34}]}]}, {"t": "chain", "steps": [{"at": "d3", "text": "缝中加速"}, {"at": "d3", "text": "盒内半圆"}, {"at": "d3", "text": "再次加速"}], "arrows": [], "size": 32}], "callout": {"label": "要点", "at": "d4", "text": "电场{加速}，磁场{回旋}；半径逐渐增大"}}} />;
