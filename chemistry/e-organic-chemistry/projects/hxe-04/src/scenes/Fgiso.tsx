import React from 'react';
import {AutoScene} from '../components/auto';

export const Fgiso: React.FC = () => <AutoScene k="fgiso" d={{"tag": "考点七", "title": "常见的官能团异构", "blocks": [{"t": "table", "at": "fi1", "head": ["通式", "互为异构的类别", "例"], "cols": "1.3fr 1.6fr 1.8fr", "rows": [{"at": "fi1", "cells": ["C_nH_(2n+2)O", "{醇、醚}", "CH3CH2OH、CH3OCH3"]}, {"at": "fi2", "cells": ["C_nH_(2n)O", "{醛、酮}、烯醇", "CH3CH2CHO、CH3COCH3"]}, {"at": "fi3", "cells": ["C_nH_(2n)O2", "{羧酸、酯}", "CH3COOH、HCOOCH3"]}, {"at": "fi3", "cells": ["C_nH_(2n)", "烯烃、环烷烃", "CH2=CHCH3、环丙烷"]}], "size": 29, "rowHeight": 62}], "callout": {"label": "解题方法", "at": "fi4", "text": "先算{不饱和度}，再想可能的类别"}}} />;
