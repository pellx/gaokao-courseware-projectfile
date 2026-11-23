import React from 'react';
import {AutoScene} from '../components/auto';

export const Trend: React.FC = () => <AutoScene k="trend" d={{"tag": "考点五", "title": "各量随位置的变化", "blocks": [{"t": "table", "at": "t1", "head": ["位置", "位移、回复力、加速度", "速度"], "cols": "1.3fr 2fr 1.2fr", "rows": [{"at": "t1", "cells": ["远离平衡位置", "{增大}", "减小"]}, {"at": "t2", "cells": ["平衡位置", "为 0", "{最大}"]}, {"at": "t3", "cells": ["最大位移处", "{最大}", "为 0"]}], "size": 32, "rowHeight": 76}], "callout": {"label": "要点", "at": "t4", "text": "速度与位移、加速度{变化相反}"}}} />;
