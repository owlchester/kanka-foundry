/// <reference types="foundry-pc-types" />
import hmrWrapHook from './hooks/hmrWrapHook';
import init from './hooks/init';
import renderJournalDirectory from './hooks/renderJournalDirectory';
import './kanka-foundry.scss';

const refreshInit = hmrWrapHook('init', () => init, 'once');
const refreshRenderJournalDirectory = hmrWrapHook('renderJournalDirectory', () => renderJournalDirectory, 'on');

if (module.hot) {
    CONFIG.debug.hooks = true;
    module.hot.accept('./hooks/init', refreshInit);
    module.hot.accept('./hooks/renderJournalDirectory', refreshRenderJournalDirectory);
}
