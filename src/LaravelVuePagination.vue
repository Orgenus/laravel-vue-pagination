<template>
    <RenderlessLaravelVuePagination
        :data="data"
        :limit="limit"
        :show-disabled="showDisabled"
        :size="size"
        :align="align"
        @pagination-change-page="onPaginationChangePage"
        v-slot="slotProps"
    >
        <div v-if="slotProps.themeEngine === 'tailwind'">
            <ul
                v-bind="$attrs"
                class="pagination inline-flex -space-x-px"
                :class="{
                    'pagination-sm': slotProps.size == 'small',
                    'pagination-lg': slotProps.size == 'large',
                    'justify-content-center': slotProps.align == 'center',
                    'justify-content-end': slotProps.align == 'right'
                }"
                v-if="slotProps.computed.total > slotProps.computed.perPage">
                
                <li class="page-item pagination-prev-nav" :class="{'disabled': !slotProps.computed.prevPageUrl}" v-if="slotProps.computed.prevPageUrl || slotProps.showDisabled">
                    <a aria-label="Previous" :tabindex="!slotProps.computed.prevPageUrl && -1" v-on="slotProps.prevButtonEvents" href="#" class=" page-linkblock py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <span class="sr-only">Previous</span>
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    </a>
                </li>
                    
                

                <li class="page-item pagination-page-nav" v-for="(page, key) in slotProps.computed.pageRange" :key="key" :class="{ 'active': page == slotProps.computed.currentPage }">
                    <a class="page-link py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" href="#" v-on="slotProps.pageButtonEvents(page)">
                        {{ page }}
                    </a>
                </li>

                <li class="page-item pagination-next-nav" :class="{'disabled': !slotProps.computed.nextPageUrl}" v-if="slotProps.computed.nextPageUrl || slotProps.showDisabled">
                    <a href="#" aria-label="Next" :tabindex="!slotProps.computed.nextPageUrl && -1" v-on="slotProps.nextButtonEvents" class="page-link block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <span class="sr-only">Next</span>
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    </a>
                </li>

            </ul>
        </div>
        <div v-else>
            <ul
                v-bind="$attrs"
                class="pagination"
                :class="{
                    'pagination-sm': slotProps.size == 'small',
                    'pagination-lg': slotProps.size == 'large',
                    'justify-content-center': slotProps.align == 'center',
                    'justify-content-end': slotProps.align == 'right'
                }"
                v-if="slotProps.computed.total > slotProps.computed.perPage">

                <li class="page-item pagination-prev-nav" :class="{'disabled': !slotProps.computed.prevPageUrl}" v-if="slotProps.computed.prevPageUrl || slotProps.showDisabled">
                    <a class="page-link" href="#" aria-label="Previous" :tabindex="!slotProps.computed.prevPageUrl && -1" v-on="slotProps.prevButtonEvents">
                        <slot name="prev-nav">
                            <span aria-hidden="true">&laquo;</span>
                            <span class="sr-only">Previous</span>
                        </slot>
                    </a>
                </li>

                <li class="page-item pagination-page-nav" v-for="(page, key) in slotProps.computed.pageRange" :key="key" :class="{ 'active': page == slotProps.computed.currentPage }">
                    <a class="page-link" href="#" v-on="slotProps.pageButtonEvents(page)">
                        {{ page }}
                        <span class="sr-only" v-if="page == slotProps.computed.currentPage">(current)</span>
                    </a>
                </li>

                <li class="page-item pagination-next-nav" :class="{'disabled': !slotProps.computed.nextPageUrl}" v-if="slotProps.computed.nextPageUrl || slotProps.showDisabled">
                    <a class="page-link" href="#" aria-label="Next" :tabindex="!slotProps.computed.nextPageUrl && -1" v-on="slotProps.nextButtonEvents">
                        <slot name="next-nav">
                            <span aria-hidden="true">&raquo;</span>
                            <span class="sr-only">Next</span>
                        </slot>
                    </a>
                </li>

            </ul>
        </div>
        
    </RenderlessLaravelVuePagination>
</template>

<script>
import RenderlessLaravelVuePagination from './RenderlessLaravelVuePagination.vue';

export default {
    inheritAttrs: false,

    emits: ['pagination-change-page'],

    components: {
        RenderlessLaravelVuePagination
    },

    props: {
        data: {
            type: Object,
            default: () => {}
        },
        limit: {
            type: Number,
            default: 0
        },
        showDisabled: {
            type: Boolean,
            default: false
        },
        themeEngine: {
            type: String,
            default: 'tailwind'
        },
        size: {
            type: String,
            default: 'default',
            validator: value => {
                return ['small', 'default', 'large'].indexOf(value) !== -1;
            }
        },
        align: {
            type: String,
            default: 'left',
            validator: value => {
                return ['left', 'center', 'right'].indexOf(value) !== -1;
            }
        }
    },

    methods: {
        onPaginationChangePage (page) {
            this.$emit('pagination-change-page', page);
        }
    }
}
</script>
