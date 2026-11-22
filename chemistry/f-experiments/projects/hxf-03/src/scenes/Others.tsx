import React from 'react';
import {AutoScene} from '../components/auto';

export const Others: React.FC = () => <AutoScene k="others" d={{"tag": "考点三", "title": "SO2、O2、CO2 的制法", "blocks": [{"t": "table", "at": "ot1", "head": ["气体", "原理", "注意"], "cols": "0.7fr 2.2fr 1.8fr", "rows": [{"at": "ot1", "cells": ["SO2", "Na2SO3 + 较浓硫酸；Cu + 浓硫酸 △", "不用稀硫酸"]}, {"at": "ot2", "cells": ["O2", "KMnO4 △；H2O2（MnO2）", "—"]}, {"at": "ot3", "cells": ["CO2", "大理石 + {稀盐酸}", "{不用稀硫酸}"]}], "size": 30, "rowHeight": 70}], "callout": {"label": "易错", "at": "ot4", "text": "CO2 中的 HCl：用{饱和 NaHCO3}除去"}}} />;
