import React from 'react';
import {AutoScene} from '../components/auto';

export const Prism: React.FC = () => <AutoScene k="prism" d={{"tag": "考点八", "title": "平行玻璃砖与三棱镜", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "平行玻璃砖", "at": "h1", "lines": ["出射光 ∥ 入射光", "发生{侧移}"], "c": "red", "size": 36}]}, {"blocks": [{"t": "panel", "title": "三棱镜", "at": "h2", "lines": ["向{底边}偏折", {"at": "h3", "text": "两次折射偏折叠加"}], "c": "orange", "size": 36}]}]}], "callout": {"label": "要点", "at": "h4", "text": "玻璃砖：方向不变，{只侧移}"}}} />;
