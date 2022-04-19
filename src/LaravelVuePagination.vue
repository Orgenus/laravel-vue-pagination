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
                class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination"
                :class="{
                    'pagination-sm': slotProps.size == 'small',
                    'pagination-lg': slotProps.size == 'large',
                    'justify-content-center': slotProps.align == 'center',
                    'justify-content-end': slotProps.align == 'right'
                }"
                v-if="slotProps.computed.total > slotProps.computed.perPage">
                
                <li :class="{'disabled': !slotProps.computed.prevPageUrl}" v-if="slotProps.computed.prevPageUrl || slotProps.showDisabled">
                    <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        <svg style="width: 1.25rem;height: 1.25rem;" class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </li>
                    
                

                <li class="page-item pagination-page-nav" v-for="(page, key) in slotProps.computed.pageRange" :key="key" :class="{ 'active': page == slotProps.computed.currentPage }">
                    <a class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium" href="#" v-on="slotProps.pageButtonEvents(page)">
                        {{ page }}
                    </a>
                </li>

                <li class="page-item pagination-next-nav" :class="{'disabled': !slotProps.computed.nextPageUrl}" v-if="slotProps.computed.nextPageUrl || slotProps.showDisabled">
                    <a href="#" :tabindex="!slotProps.computed.nextPageUrl && -1" v-on="slotProps.nextButtonEvents" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        <svg style="width: 1.25rem;height: 1.25rem;" class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
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
