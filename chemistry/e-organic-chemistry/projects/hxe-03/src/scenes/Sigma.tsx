import React from 'react';
import {AutoScene} from '../components/auto';

export const Sigma: React.FC = () => <AutoScene k="sigma" d={{"tag": "考点三", "title": "σ 键与 π 键计数", "blocks": [{"t": "table", "at": "sg1", "head": ["共价键", "σ 键", "π 键"], "cols": "1fr 1fr 1fr", "rows": [{"at": "sg1", "cells": ["单键", "{1}", "0"]}, {"at": "sg1", "cells": ["双键", "{1}", "1"]}, {"at": "sg1", "cells": ["三键", "{1}", "2"]}], "size": 34, "rowHeight": 58}, {"t": "text", "at": "sg2", "text": "CH2=CH2：σ 键 {5}、π 键 1；CH≡CH：σ 键 {3}、π 键 2", "size": 33, "center": true}], "callout": {"label": "易错", "at": "sg4", "text": "别漏了 {C—H 键}"}}} />;
