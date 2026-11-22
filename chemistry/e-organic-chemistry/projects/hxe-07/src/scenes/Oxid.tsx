import React from 'react';
import {AutoScene} from '../components/auto';

export const Oxid: React.FC = () => <AutoScene k="oxid" d={{"tag": "考点四", "title": "烯烃的氧化", "blocks": [{"t": "table", "at": "ox2", "head": ["双键碳", "酸性 KMnO4 氧化产物"], "cols": "1.2fr 1.6fr", "rows": [{"at": "ox2", "cells": ["=CH2", "{CO2}"]}, {"at": "ox2", "cells": ["=CHR", "RCOOH"]}, {"at": "ox2", "cells": ["=CR2", "酮 RCOR"]}], "size": 34, "rowHeight": 64}, {"t": "rule", "tag": "臭氧化", "at": "ox3", "text": "双键断开 → 两边各变成 {C=O}（醛或酮）", "c": "orange", "size": 31}], "callout": {"label": "解题方法", "at": "ox4", "text": "反推：把 C=O {两两连成 C=C}"}}} />;
