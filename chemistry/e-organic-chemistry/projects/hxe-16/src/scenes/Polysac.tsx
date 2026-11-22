import React from 'react';
import {AutoScene} from '../components/auto';

export const Polysac: React.FC = () => <AutoScene k="poly" d={{"tag": "考点三", "title": "二糖与多糖", "blocks": [{"t": "table", "at": "ps1", "head": ["糖", "水解产物", "还原糖"], "cols": "1fr 1.8fr 0.9fr", "rows": [{"at": "ps1", "cells": ["蔗糖", "葡萄糖 + 果糖", "{否}"]}, {"at": "ps1", "cells": ["麦芽糖", "2 葡萄糖", "{是}"]}, {"at": "ps2", "cells": ["淀粉、纤维素", "葡萄糖", "否"]}], "size": 32, "rowHeight": 62}, {"t": "text", "at": "ps3", "text": "检验水解产物：先加 {NaOH 中和}，再加新制 Cu(OH)2", "size": 32, "center": true}], "callout": {"label": "易错", "at": "ps4", "text": "检验是否完全水解：用{碘水}，不先加碱"}}} />;
