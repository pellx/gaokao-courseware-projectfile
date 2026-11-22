import React from 'react';
import {AutoScene} from '../components/auto';

export const Amide: React.FC = () => <AutoScene k="amide" d={{"tag": "考点七", "title": "胺与酰胺", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "胺", "at": "am1", "text": "—NH2，{显碱性}", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "酰胺", "at": "am2", "text": "{—CONH—}", "c": "orange", "size": 32}]}]}, {"t": "table", "at": "am3", "head": ["酰胺水解", "产物"], "cols": "1fr 2fr", "rows": [{"at": "am3", "cells": ["酸性", "羧酸 + {铵盐}"]}, {"at": "am3", "cells": ["碱性", "羧酸盐 + {氨（胺）}"]}], "size": 32, "rowHeight": 62}], "callout": {"label": "解题方法", "at": "am4", "text": "酰胺水解断 {C—N 键}"}}} />;
