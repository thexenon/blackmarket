package com.optyxenon.blackmarket.ui.fragments

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.databinding.DataBindingUtil
import androidx.fragment.app.Fragment
import androidx.fragment.app.viewModels
import androidx.lifecycle.Observer
import androidx.recyclerview.widget.GridLayoutManager
import com.optyxenon.blackmarket.R
import com.optyxenon.blackmarket.databinding.FragmentFeaturedBinding
import com.optyxenon.blackmarket.ui.adapters.ProductsAdapter
import com.optyxenon.blackmarket.ui.viewModels.MainViewModel
import com.optyxenon.blackmarket.utilities.Resource
import com.optyxenon.blackmarket.utilities.VisualUtils.SpacingItemDecoration
import com.optyxenon.blackmarket.utilities.VisualUtils.calculateNoOfColumns
import dagger.hilt.android.AndroidEntryPoint


@AndroidEntryPoint
class FeaturedFragment : Fragment() {
    private val TAG = FeaturedFragment::class.java.name

    private lateinit var binding: FragmentFeaturedBinding
    private lateinit var adapter: ProductsAdapter
    private val viewModel: MainViewModel by viewModels()

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        // Inflate the layout for this fragment
        binding = DataBindingUtil.inflate(inflater, R.layout.fragment_featured, container, false)

        adapter = ProductsAdapter(ProductsAdapter.OnClickListener { position, item ->
            // TODO item click listener
        })

        binding.apply {
            featuredRecycler.layoutManager = GridLayoutManager(
                requireContext(), calculateNoOfColumns(
                    requireContext(), 180f, 8
                )
            )

            featuredRecycler.addItemDecoration(
                SpacingItemDecoration(
                    resources.getDimensionPixelSize(R.dimen.grid_spacing),
                    calculateNoOfColumns(requireContext(), 180f, 8)
                )
            )

            featuredRecycler.adapter = adapter
            featuredImgBack.setOnClickListener { requireActivity().onBackPressed() }
        }

        return binding.root
    }

    override fun onStart() {
        super.onStart()
        getFeaturedList()
    }

    private fun getFeaturedList() {
        viewModel.featuredProducts.observe(this, Observer {
            when (it) {
                is Resource.Loading -> {
                    // TODO Do shimmer effect
                }

                is Resource.Success -> {
                    adapter.submitList(it.data)
                }

                is Resource.Error -> {

                }
            }
        })
    }
}